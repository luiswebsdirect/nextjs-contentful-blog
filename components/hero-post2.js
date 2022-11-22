import Link from 'next/link'

export default function HeroPost2({
  titulo,
  slug,
}) {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {titulo}
            </Link>
          </h3>
        </div>
      </div>
    </section>
  )
}
