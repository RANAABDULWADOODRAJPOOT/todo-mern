'use client';
import { Button, Input, message } from "antd";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Page() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const router = useRouter();


    useEffect(() => {

        return () => {
            setDescription();
            setTitle();
        }
    }, []);

    const submit = async (e) => {
        if (!description || !title) {
            message.error("Title and Description are Requried");
            return;
        }
        const response = await axios.post('http://localhost:3000/api', {
            title,
            description
        });

        if (response?.data?.title) {
            message.info("Todo Created Successfully");
            router.push('/');
        } else {
            message.error("Creation of Todo is Unsuccessful");
        }
    }


    return (<>
    <div className="m-16">
    <h1>Create Todo</h1>
        <Input className="my-2" title="Title" value={title} onChange={(e) => {
            setTitle(e.target.value);
        }} placeholder="Title" />
        <Input className="my-2" title="Description" value={description} onChange={(e) => {
            setDescription(e.target.value);
        }} placeholder="Description" />
        <Button className="my-2"  type="default" onClick={submit}>Submit</Button>
        </div>
    </>)
}