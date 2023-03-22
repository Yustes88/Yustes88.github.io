import { AppRoute } from "../../const"

function Logo() {
  return(
    <>
    <div className="flex justify-center lg:flex-1 border-b-">
  <a href={AppRoute.Root}>
    <span className="sr-only">Мама Волга</span>
    <img
      className="h-20 w-20"
      src='icon/logo-volga.png'
      alt="Mama Volga logo"
    />
  </a>
</div>
  <hr className="w-4/5  h-px mx-auto bg-brown-light-1 opacity-20 border-0 rounded"/>
  </>
  )
}

export default Logo