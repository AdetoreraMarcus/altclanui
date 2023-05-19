import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import styles from "@/styles/login.module.css";

export default function SignUp() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const router = useRouter();

    const submit = async(e) => {
        e.preventDefault();
        console.log("Button was clicked")
        await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({email, password})
        })


        //await router.push('/accounts/login')
    }



  return (
    <div className={styles.loginContainer}>
        <div className={styles.columnImage}>
            <img src="https://media.everlane.com/image/upload/c_fill,w_828,ar_380:655,q_auto,dpr_1.0,f_auto,fl_progressive:steep/Modal_Desktop-05102022_pyajh1" alt="" className={styles.img}/>
        </div>

        <div className={styles.columnText}>
            <form className={styles.form}  onSubmit={submit}>
                <Link href="#" className={styles.head}>
                    <img className={styles.logo} src="/alteclan_logo.jpg" alt="logo"/>
                    {/* Altclan     */}
                </Link>

                <h1 className={styles.greeting}>Good to see you again</h1>
                <p className={styles.login}>Please log in to your account</p>

                <div>
                    {/* <label for="email" className="block mb-2 text-sm font-medium text-black">Your email</label> */}
                    <input type="email" onChange={e => setEmail(e.target.value)} name="email" id="email" className={styles.input} placeholder="name@company.com" required/>
                </div>
                <div>
                    {/* <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label> */}
                    <input type="password" onChange={e => setPassword(e.target.value)} name="password" id="password" placeholder="•••••••" className={styles.input} required/>
                </div>
                <div>

                </div>

                <button type="submit" className={styles.submit}>
                    Login
                </button>
   
                  <p className={styles.alternative}>
                      Dont have an account? 
                      <Link href="/accounts/signup" className={styles.link}>Signup here</Link>
                  </p>
              </form>
        </div>
    </div>
  )
}
