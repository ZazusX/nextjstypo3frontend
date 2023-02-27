function Image() {
  return (
    <>
      <div>
        <div class="text-xs text-slate-600 uppercase font-bold tracking-wider">{{ eyebrow }}</div>
        <div class="font-bold text-slate-700 leading-snug"></div>
        <div class="mt-2 text-sm text-slate-600">{{ pricing }}</div>
      </div>
    </>
  );
}

export default {
  props: ["img", "imgAlt", "eyebrow", "title", "pricing", "url"],
};
