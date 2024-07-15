import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const payload = {
        email: email,
        password: password
    }

    const Login = async()=>{
        try {
            const res = await fetch("http://localhost:3008/auth/login",{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(payload)
            })
            if(res.ok){
                const data = await res.json()
                console.log(data)
                setEmail("")
                setPassword("")
                localStorage.setItem("token", data.token)
                navigate("/")
            }else{
                throw new Error("Errore nel login")
            }
        } catch (error) {
            console.log(error)
        }
        
    }

    return(
        <Container className="mt-5">
            <Form onSubmit={(e)=>{e.preventDefault(); Login()}}>
                <Form.Group>
                    <Form.Label>email</Form.Label>
                    <Form.Control type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>password</Form.Label>
                    <Form.Control type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </Form.Group>
                <Button type="submit">Login</Button>
            </Form>
        </Container>
    )
}
export default Login