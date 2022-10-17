export default async function registerUser(req, res) {
    console.log(req)
    try {
        const url = 'http://localhost:8000/api/auth/register'
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
    } 
    catch(err) {
        console.log(err)
        res.status(500).json({
            error: err.message
        })
    }
}

// try {
//     let response = await fetch('/no-user-here');
//     let user = await response.json();
//   } catch(err) {
//     // catches errors both in fetch and response.json
//     alert(err);
//   }