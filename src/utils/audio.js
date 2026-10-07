// Bulletproof Web Audio API Synthesizer with Master Volume and Reliable Autoplay Resumption
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.isMuted = false;
    this.isPlayingMusic = false;
    this.musicTimeout = null;
    this.activeOscillators = [];
    this.onStateChange = null;
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.5, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    return this.ctx;
  }

  async resume() {
    this.ensureContext();
    if (this.ctx && this.ctx.state === 'suspended') {
      try {
        await this.ctx.resume();
      } catch (e) {
        console.warn('AudioContext resume pending user interaction', e);
      }
    }
    return this.ctx && this.ctx.state === 'running';
  }

  // Play Pop sound
  playPop() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx || this.ctx.state !== 'running') return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.12);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.13);
    } catch (e) {
      console.warn(e);
    }
  }

  // Blow candle sound
  playBlow() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx || this.ctx.state !== 'running') return;

    try {
      const bufferSize = this.ctx.sampleRate * 0.35;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 800;
      filter.Q.value = 1.5;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.35);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      noise.start();
    } catch (e) {
      console.warn(e);
    }
  }

  // Cheer / celebration sound
  playCheer() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx || this.ctx.state !== 'running') return;

    try {
      const bufferSize = this.ctx.sampleRate * 0.8;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, this.ctx.currentTime);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.8);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      noise.start();
    } catch (e) {
      console.warn(e);
    }
  }

  // Play Happy Birthday tune continuously
  async startMusicLoop() {
    if (this.isMuted) return;
    this.ensureContext();

    const isRunning = await this.resume();
    if (!isRunning) {
      return false;
    }

    this.stopMusic();
    this.isPlayingMusic = true;
    if (this.onStateChange) this.onStateChange(true);

    this.playMelody(() => {
      if (this.isPlayingMusic && !this.isMuted) {
        this.musicTimeout = setTimeout(() => {
          if (this.isPlayingMusic && !this.isMuted) {
            this.startMusicLoop();
          }
        }, 1200);
      }
    });

    return true;
  }

  stopMusic() {
    this.isPlayingMusic = false;
    if (this.musicTimeout) {
      clearTimeout(this.musicTimeout);
      this.musicTimeout = null;
    }
    this.activeOscillators.forEach((osc) => {
      try {
        osc.stop();
      } catch (e) {}
    });
    this.activeOscillators = [];
    if (this.onStateChange) this.onStateChange(false);
  }

  playMelody(onComplete) {
    if (!this.ctx || this.ctx.state !== 'running') return;

    // Melody: Happy Birthday notes & durations
    const melody = [
      { note: 392.00, dur: 0.35 }, // Hap-
      { note: 392.00, dur: 0.25 }, // py
      { note: 440.00, dur: 0.55 }, // Birth-
      { note: 392.00, dur: 0.55 }, // day
      { note: 523.25, dur: 0.55 }, // to
      { note: 493.88, dur: 1.05 }, // you
      { rest: 0.3 },

      { note: 392.00, dur: 0.35 }, // Hap-
      { note: 392.00, dur: 0.25 }, // py
      { note: 440.00, dur: 0.55 }, // Birth-
      { note: 392.00, dur: 0.55 }, // day
      { note: 587.33, dur: 0.55 }, // to
      { note: 523.25, dur: 1.05 }, // you
      { rest: 0.3 },

      { note: 392.00, dur: 0.35 }, // Hap-
      { note: 392.00, dur: 0.25 }, // py
      { note: 783.99, dur: 0.55 }, // Birth-
      { note: 659.25, dur: 0.55 }, // day
      { note: 523.25, dur: 0.55 }, // dear
      { note: 493.88, dur: 0.55 }, // Ga-
      { note: 440.00, dur: 1.05 }, // ni
      { rest: 0.3 },

      { note: 698.46, dur: 0.35 }, // Hap-
      { note: 698.46, dur: 0.25 }, // py
      { note: 659.25, dur: 0.55 }, // Birth-
      { note: 523.25, dur: 0.55 }, // day
      { note: 587.33, dur: 0.65 }, // to
      { note: 523.25, dur: 1.40 }, // you!
    ];

    let startOffset = 0.05;
    const now = this.ctx.currentTime;
    this.activeOscillators = [];

    melody.forEach((item) => {
      if (item.rest) {
        startOffset += item.rest;
        return;
      }

      try {
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const noteGain = this.ctx.createGain();

        // Warm, celebratory vibraphone acoustic sound
        osc1.type = 'triangle';
        osc2.type = 'sine';

        osc1.frequency.setValueAtTime(item.note, now + startOffset);
        osc2.frequency.setValueAtTime(item.note * 2, now + startOffset);

        noteGain.gain.setValueAtTime(0.4, now + startOffset);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + startOffset + item.dur * 0.95);

        osc1.connect(noteGain);
        osc2.connect(noteGain);
        noteGain.connect(this.masterGain);

        osc1.start(now + startOffset);
        osc2.start(now + startOffset);

        osc1.stop(now + startOffset + item.dur);
        osc2.stop(now + startOffset + item.dur);

        this.activeOscillators.push(osc1, osc2);
      } catch (e) {
        console.warn(e);
      }

      startOffset += item.dur * 0.98;
    });

    const totalMs = startOffset * 1000;
    this.musicTimeout = setTimeout(() => {
      if (onComplete) onComplete();
    }, totalMs);
  }

  toggleMusic() {
    if (this.isPlayingMusic) {
      this.stopMusic();
      return false;
    } else {
      this.isMuted = false;
      this.startMusicLoop();
      return true;
    }
  }
}

export const sound = new SoundEngine();
