import React, { useRef } from 'react';
import "./contact.css";
import "../../index.css";
import { motion, useInView } from "framer-motion"
import emailjs from "@emailjs/browser"

const contactVariants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        },
    },
};

const Contact = () => {
    const ref = useRef();
    const formRef = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1u4zcpv', 'template_o2tq5bh', formRef.current, { publicKey: 'fxU3sgb39GDXdTLM3', })
            .then(() => {
                alert('SUCESSFULLY SENT!');
            },
                (error) => {
                    alert("FAILEDD..", error.text);
                });
    }

    return (
        <motion.div ref={ref} className="contact" variants={contactVariants} initial='initial' whileInView="animate">
            <motion.div className="contact-text" variants={contactVariants}>
                <motion.h1 variants={contactVariants}>Let's get in touch!</motion.h1>
                <motion.div className="item" variants={contactVariants}>
                    <h2>Mail</h2>
                    <span>jayantika.gupta1610@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={contactVariants}>
                    <h2>Address</h2>
                    <span>Pune, Maharashtra</span>
                </motion.div>
                <motion.div className="item" variants={contactVariants}>
                    <h2>Phone</h2>
                    <span>+91-7800257218</span>
                </motion.div>
            </motion.div>
            <div className="contact-form">
                <motion.div className="contactSvg" initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} transition={{ delay: 3, duration: 1 }}>
                    <svg width="450px" height="450px" viewBox="0 0 64 64" >
                        <motion.path
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 10 }}
                            stroke="rgb(120, 171, 33)"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M59.3057,21.6533l-7.2637-4.4982V2c0-0.5522-0.4473-1-1-1H12.4771c-0.5522,0-1,0.4478-1,1v15.0159     c-3.4714,2.1884-5.806,3.7847-6.9165,4.7346c-1.5254,1.3042-2.3652,3.1631-2.3652,5.2334v29.0249     C2.1953,59.8638,5.3315,63,9.186,63h45.6284c1.8837,0,3.5925-0.7524,4.8508-1.9683c0.0023-0.0023,0.0054-0.003,0.0076-0.0053     c0.0011-0.0012,0.0013-0.0027,0.0024-0.0039c1.3107-1.2715,2.1294-3.0475,2.1294-5.0137V26.9839     C61.8047,25.2393,61.1504,22.7964,59.3057,21.6533z M52.042,19.5073l5.0593,3.1331l-5.0593,4.4129V19.5073z M58.784,23.826     c0.6964,0.7996,1.0207,2.077,1.0207,3.1579v29.0249c0,1.0747-0.3491,2.0649-0.9291,2.8804L39.5911,40.5665L58.784,23.826z      M13.4771,3H50.042v25.7969L31.998,44.5361l-18.521-16.1475V3z M11.4771,19.3841v7.2624L6.7792,22.551     C7.835,21.7673,9.4214,20.6976,11.4771,19.3841z M4.1953,56.0088V26.9839c0-1.1927,0.3796-2.2405,1.0782-3.0918l19.8513,17.3058     L5.7814,59.6376C4.8109,58.7264,4.1953,57.4419,4.1953,56.0088z M9.186,61c-0.5724,0-1.1138-0.1168-1.6263-0.295l19.0789-18.1874     l4.7021,4.0992c0.1885,0.1641,0.4229,0.2461,0.6572,0.2461s0.4692-0.082,0.6572-0.2466l5.4222-4.7294l19.3299,18.3657     C56.6494,60.7177,55.7672,61,54.8145,61H9.186z" />
                    </svg>
                </motion.div>
                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 4, duration: 1, staggerChildren: 0.5 }}>
                    <input type="text" required placeholder="Name" name="name" />
                    <input type="email" required placeholder="Email" email="email" />
                    <textarea rows={6} placeholder="Message" name="message" />
                    <button>Send Message</button>
                </motion.form>
            </div>
        </motion.div>
        
    )
}

export default Contact


