import Image from "next/image";
import Layout from "./Layout";

export default () => {
  return (
    <Layout top>
      <footer className="px-4 py-6 flex items-center justify-between">
        <div>
          <span className="flex items-center text-sm text-neutral-600">
            Crafted by{" "}
            <a
              href="https://harshsingh.xyz"
              target="_blank"
              rel="noreferrer"
              className="flex items-center rounded-full py-0.5 pl-1 pr-2 text-neutral-950 transition-all hover:bg-neutral-300/50 active:scale-[.98]"
            >
              <Image
                src="/headshot.webp"
                width={20}
                height={20}
                alt="My face"
                className="mr-0.5 rounded-full border border-neutral-600"
                draggable={false}
              />
              Harsh Singh
            </a>
          </span>
        </div>
        <div>
          <div>
            <button>
              <
            </button>
          </div>
        </div>
      </footer>
    </Layout>
  );
};
