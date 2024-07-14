import { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

function Users(){
    const [user, setUser] = useState(null)
    const navigate = useNavigate()


    const getUsers = async () =>{
      try {
        const res = await fetch("http://localhost:3008/users")       
          if(res.ok){
            const data = await res.json()
            setUser(data)
            console.log(data)
          }else{
            throw new Error("Errore nel ricevere gli utenti")
          }      
      } catch (error) {
        console.log(error)
      }    
    }

    const deleteUser = async (userId) =>{
      try {
        const res = await fetch(`http://localhost:3008/users/${userId}`, {method:"DELETE"})

            if(res.ok){
                const message = await res.text()
                console.log(message)
                getUsers()
            }else{
                throw new Error("Errore nel cancellare utente")
            }      
        
      } catch (error) {
        console.log(error)
      }
      
    }
    
    useEffect(()=>{
    getUsers()
    },[])
    return(
        <div className="text-center mt-5">
        <h1>Utenti:</h1>
        <div className="d-flex flex-row justify-content-evenly">
      {user && user.map((u)=>{
        return(
        <Card key={u.id} style={{ width: '18rem' }} >
        <Card.Header>{u.nome}</Card.Header>
        <Card.Body>
          <Card.Title>{u.email}</Card.Title>
          <Card.Text>
          {u.password}
          </Card.Text>
          <div className="d-flex flex-row justify-content-around">
          <Button variant="primary" onClick={()=>navigate(`/updateUsers/${u.id}`)}>Modifica</Button>
          <Button variant="danger" onClick={()=> deleteUser(u.id)}>Elimina</Button>
          </div>
        </Card.Body>
      </Card>
    )
      })}
      </div>
        </div>
    )
}
export default Users