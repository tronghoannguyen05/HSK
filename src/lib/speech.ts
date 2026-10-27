/** Đọc tiếng Trung bằng giọng có sẵn của trình duyệt. */
export function speakZh(text: string, rate = 0.85) {
  try {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'zh-CN';
    u.rate = rate;
    const zh = window.speechSynthesis.getVoices().find((v) => v.lang.startsWith('zh'));
    if (zh) u.voice = zh;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch {
    /* trình duyệt không hỗ trợ */
  }
}

/** Có nhận giọng nói được không (Safari iPad: webkitSpeechRecognition). */
export function canRecognize(): boolean {
  const w = window as unknown as Record<string, unknown>;
  return Boolean(w.SpeechRecognition || w.webkitSpeechRecognition);
}
