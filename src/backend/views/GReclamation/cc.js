import {ExportToExcel} from './ExportToExcel'

function Cc() {
  const [data, setData] = React.useState([])
  const fileName = "myfile"; // here enter filename for your excel file

  React.useEffect(() => {
    const fetchData = () =>{
     axios.get('http://localhost:5000/Reclamation/').then(r => setData(r.data) )
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <ExportToExcel apiData={data} fileName={fileName} />
    </div>
  );
}

export default Cc;
