import grandChild from "./components/grandChild"

export default () => {
  return (
    <div>
      im child
      {grandChild()}
    </div>
  )
}