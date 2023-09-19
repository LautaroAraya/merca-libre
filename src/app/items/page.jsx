export default async function ItemsPage({searchParams}){

  const respuesta = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchParams.q}&limit=15`);
  const data = await respuesta.json();
  //console.log(data)

  return (
<ul className="flex flex-col flex-shrink items-start-center space-x-3 p-4">
{data.results.map(item => {
  return(
    <li key={item.id}>
    <div className="bg-100 border border-white m-4 p-3 w-100">
    <h1>{item.title}</h1>
    <h2>{item.condition}</h2>
    <img
      src={item.thumbnail}
      width="100"
      height="250"
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