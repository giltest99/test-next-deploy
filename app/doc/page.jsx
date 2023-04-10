import ReactDocNavigation from "../components/ReactDocNavigation";

export default function Documentation() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24 py-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Documentation</h1>
        <h2 className="text-2xl">Documentation des outils Js utilisés</h2>
      </header>

      <div className="grid grid-cols-4 gap-4 border-1 border-slate-300 w-full">
        <div className="col-span-1 bg-neutral-100 px-4 py-2 rounded-lg">
          <ReactDocNavigation />
        </div>
        <div className="col-span-3 bg-neutral-100 px-4 py-2 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Le titre de l&apos;article</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fuga voluptas repellat est nesciunt vel excepturi sed labore asperiores explicabo! Iure numquam ea incidunt, mollitia veritatis molestias qui nihil a impedit et perspiciatis natus sint asperiores blanditiis quos reprehenderit, in iusto! Placeat deserunt tempora enim libero error reiciendis dolorum modi maxime ipsam, odit eaque, inventore vero nulla!
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur saepe et mollitia fuga doloribus, modi obcaecati ab officiis suscipit maiores fugit molestiae officia nisi nobis illo cumque assumenda dicta laboriosam rem aliquam accusantium, iusto aperiam harum. Reiciendis quod officiis ipsa provident debitis cumque! Perspiciatis sint temporibus sequi id quaerat reprehenderit nulla aliquid saepe amet consequatur nihil harum dicta praesentium cupiditate, ab fugiat, quis dolorum ut, consequuntur fugit ea officiis. At, quisquam enim.
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci, quia laborum ad atque voluptatibus eaque in cumque ducimus doloremque et debitis labore totam explicabo, ipsum error eum!
        </div>
      </div>
    </main>
  );
}
