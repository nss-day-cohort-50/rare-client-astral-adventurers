import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Auth.css"


export const Login = () => {
    const username = useRef() //was email
    const password = useRef()
    const invalidDialog = useRef()
    const history = useHistory()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: username.current.value, //was email
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("token" in res && res.valid) {
                    localStorage.setItem("rare_user_id", res.token )
                    history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>username or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Rare Publishing</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputUserName"> Username </label>
                        <input ref={username} type="username" id="username" className="form-control" defaultValue="me@me.com" placeholder="username address" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password" id="password" className="form-control" defaultValue="me" placeholder="Password" required />
                    </fieldset>
                    <fieldset style={{
                        textAlign:"center"
                    }}>
                        <button className="btn btn-1 btn-sep icon-send" type="submit">Sign In</button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}
