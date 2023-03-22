import { ChevronDownIcon } from "@heroicons/react/24/outline";

type ScrollButtonClick = {
  onClick: () => void;
}

export default function ScrollButton({onClick}: ScrollButtonClick) {
  return (
    <>
    <div className="flex justify-center">
      <button
        type="button"
        className="rounded-full p-2 text-brown shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-noir animate-bounce"
        onClick={onClick}
      >
        <ChevronDownIcon className="h-8 w-8" aria-hidden="true" />
      </button>
      </div>
    </>
  )
}