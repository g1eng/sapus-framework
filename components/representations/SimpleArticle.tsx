import React, { useEffect, useState } from "react"
import { getArticleJsonPath } from "../helpers"
import { postId, sentences, title } from "../types"

const SimpleArticle = (props: {
    id: postId
}) => {
    const [post, setContent] = useState(<div className="spinner" />)
    const [pid, setPid] = useState(props.id)
    const [isFetched, setFetched] = useState(false)


    useEffect(() => {
        const loadContent = (id: number) => {
            let i = 0, j = 0
            if (!isFetched) {
                fetch(getArticleJsonPath(id))
                    .then((res) => {
                        res.json().then((res)=>{
                            if (res.data.paragraphs.length) {
                                setContent(<>{res.data.paragraphs.map((p: title | sentences) =>
                                    <div key={`para_${i++}`}>
                                        {(typeof p === "string") && <><h2>{p}</h2><hr /></>}
                                        {
                                            (typeof p === "object" && p.length && typeof p[0] === "string") &&
                                            <>
                                                {p.map(
                                                    (pp) => <p key={`${i++}-${j++}`}> {pp} </p>
                                                )}
                                            </>
                                        }
                                    </div>
                                )}</>)
                            }
                            setPid(id)
                            setFetched(true)
                        })
                        .catch((e)=>{
                            console.log(e)
                        })
                    })
                    .catch((e) => {
                        console.log(e)
                        setContent(<h2>failed to fetch content.</h2>)
                        setPid(id)
                        setFetched(true)
                    })
            }

        }

        if (props.id !== pid) setFetched(false)
        loadContent(props.id)
    }, [props.id, pid, isFetched])

    return (<>{post}</>)
}

export default SimpleArticle
