export default function Resume(){
    return (
        <section id="resume" className="bg-(--background) py-24 px-6">
  <div className="mx-auto max-w-5xl text-center">

    <h2 className="text-4xl font-semibold text-(--textMain) mb-2">
      Resume<span className="text-(--effect)">.</span>
    </h2>
    <div className="
        mt-10
      bg-(--cardBg)
      border-2 border-(--borderColor)
      shadow-[12px_12px_0px_var(--shadowColor)]
      p-4
      mb-10
    ">
      <img
        src="/resume.png"
        alt="Resume preview"
        className="w-full h-auto"
      />
    </div>

  </div>
</section>

    )
}