import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center mt-8">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to see my other projects?</h2>
        <p className="text-gray-500 my-2">Checkout my portfolio</p>
        <a
          target="_blank"
          className="rounded-tl-xl rounded-bl-none w-full"
          rel="noopener noreferrer"
          href="https://portfolio-six-ecru-43.vercel.app/"
        >
          <Button
            className="rounded-tl-xl rounded-bl-none w-full"
            gradientDuoTone="purpleToPink"
          >
            Portfolio
          </Button>
        </a>
      </div>
      <div className="p-7 flex-1">
        <img src="https://firebasestorage.googleapis.com/v0/b/mern-blog-f0d68.appspot.com/o/Screenshot%20from%202024-01-18%2022-56-41.png?alt=media&token=dde72b35-445f-4d73-a853-faa6866c0163" />
      </div>
    </div>
  );
}
