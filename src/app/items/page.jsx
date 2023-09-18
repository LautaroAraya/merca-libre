export default async function ItemsPage({searchParams}){

  const respuesta = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchParams.q}&limit=25`);
  const data = await respuesta.json();
  //console.log(data)

  return (
<ul className="container flex flex-row flex-shrink flex-wrap grid-cols-3">
{data.results.map(item => {
  return(
    <li key={item.id}>
    <div className="bg-blue-100 border border-blue-300 m-4 p-3 w-100 shadow-sm">
    <h1>{item.title}</h1>
    <h2>{item.condition}</h2>
    <img
      src={item.thumbnail}
      width="50"
      height="50"
      alt={item.title}
    />
    <p>${item.price}</p>
    </div>
    </li>
  )
})}
</ul>
)
}