const testRegister = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: "charan_sgoud_2026",
                email: "charan.goud3@example.com", 
                password: "securePassw3ord123",
                dateofbirth: "2004-10-22"
            }),
        });
        const data = await response.json();
        console.log("Registration Response:", data);
    } catch (error) {
        console.error("Connection Error:", error);
    }
};

testRegister();