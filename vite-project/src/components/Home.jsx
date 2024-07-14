import { useState } from "react"
import { Alert, Button } from "react-bootstrap"
import { Form } from "react-bootstrap"

function Home(){
    const [form, setForm] = useState(false)
    const [formSuccess, setFormSuccess] = useState(false)
    const [user, setUser] = useState("")
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const payload = {
        nome: nome,
        email: email,
        password: password
    }

    const saveUser = async ()=>{
        try {
            const res = await fetch("http://localhost:3008/users",{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(payload)
            })
            if(res.ok){
                const data = await res.json()
                setUser(data)
                     setNome("")
                     setEmail("")
                     setPassword("")
                     setFormSuccess(true)
                     setTimeout(()=>{setFormSuccess(false)},3000)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div className="d-flex justify-content-center align-items-center mt-5">
        {!form && <Button variant="outline-dark" onClick={()=>{setForm(true)}}>Inserisci Nuovo Utente</Button>}
        <div className="d-flex flex-column">
        {form && 
        <Form onSubmit={(e)=>{e.preventDefault(); saveUser()}}>
        <Form.Group >
            <Form.Label>Nome: {user && user.nome}</Form.Label>
            <Form.Control type="text" value={nome} onChange={(e)=>{setNome(e.target.value)}}/>
        </Form.Group>
        <Form.Group >
            <Form.Label>Email: </Form.Label>
            <Form.Control type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </Form.Group>
        <Form.Group >
            <Form.Label>Password: {user && user.password}</Form.Label>
            <Form.Control type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </Form.Group>
        <Button type="submit">Conferma</Button>
    </Form>
        }
        {form && <Button variant="outline-info" onClick={()=>{setForm(false)}}>Chiudi</Button>}
        {formSuccess && <Alert>Utente Inserito correttamente</Alert>}
        </div>
        </div>
    )
}
export default Home