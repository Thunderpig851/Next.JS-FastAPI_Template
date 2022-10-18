export async function registerUser(req, res) {
    console.log(res)
    try {
        const url = 'http://localhost:8000/api/auth/register'
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(req)
        })
        // Keep for testing.
        if (res.ok){
            console.log(res)
            res.writeHead(301, { Location: '/auth/login'}).end()
            }
    } catch(err) {
        console.log(err)
        res.status(500).send({
            error: err.message
        })
    }
}

export async function loginUser(req, res) {
    console.log(req)
    try {
        const url = 'http://localhost:8000/api/auth/login'
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(req)
        })
        // Keep for testing.
        if (response.ok){
            console.log(response);
            }
    } catch(err) {
        console.log(err)
        res.status(500).json({
            error: err.message
        })
    }
}