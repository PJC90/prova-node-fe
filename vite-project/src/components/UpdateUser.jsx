import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {Button, Form} from "react-bootstrap"

function UpdateUser(){
    const {userId} = useParams()
    const [user, setUser] = useState(null)
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const getUserById = () =>{
        fetch(`http://localhost:3008/users/${userId}`)
        .then((res)=>{
            if(res.ok){
                return res.json()
            }else{
                throw new Error("Errore nel recuperare un utente")
            }
        })
        .then((data)=>{
            setUser(data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const payload = {
        nome: nome,
        email: email,
        password: password
    }
    const updateUser = () =>{
        fetch(`http://localhost:3008/users/${userId}`,{
            method: "PATCH",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        })
        .then((res)=>{
            if(res.ok){
                return res.json()
            }else{
                throw new Error("Errore nel modificare un utente")
            }
        })
        .then((data)=>{
            setUser(data)
            setNome("")
            setEmail("")
            setPassword("")
        }).catch((err)=>{
            console.log(err)
        })
    }

useEffect(()=>{
    getUserById()
    
},[nome, email, password])


    return(
        <>
        
        
        <Form onSubmit={(e)=>{e.preventDefault(); updateUser()}}>
            <Form.Group >
                <Form.Label>Nome: {user && user.nome}</Form.Label>
                <Form.Control type="text" value={nome} onChange={(e)=>{setNome(e.target.value)}}/>
            </Form.Group>
            <Form.Group >
                <Form.Label>Email: {user && user.email}</Form.Label>
                <Form.Control type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </Form.Group>
            <Form.Group >
                <Form.Label>Password: {user && user.password}</Form.Label>
                <Form.Control type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </Form.Group>
            <Button type="submit">Conferma</Button>
        </Form>
        </>
    )
}
export default UpdateUser