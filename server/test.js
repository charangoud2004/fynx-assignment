const testMe = async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5OTY5M2IwZjYxOTQ0MmZiODVkM2NlMSIsImlhdCI6MTc3MTQ3NTg4OCwiZXhwIjoxNzcxNDc5NDg4fQ.jCPCcvIgOiI3DuUvwoPg22dIdipS-pyOOtOzSEZhWyY";

    const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: { authorization: token }
    });

    const data = await response.json();
    console.log("Me Response:", data);
};

testMe();