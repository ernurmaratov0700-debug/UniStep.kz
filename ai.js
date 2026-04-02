exports.handler = async function(event) {
    const data = JSON.parse(event.body);

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + process.env.OPENAI_API_KEY
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
                {role: "system", content: "You are a helpful academic advisor"},
                {role: "user", content: data.prompt}
            ]
        })
    });

    const result = await response.json();
    return { statusCode: 200, body: JSON.stringify(result) };
};
