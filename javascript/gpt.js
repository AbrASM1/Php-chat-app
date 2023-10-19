import openai from 'openai';

const apiKey = 'YOUR_OPENAI_API_KEY';

const chatGPT = async (prompt) => {
  try {
    const response = await openai.Completion.create(
      {
        text: prompt,
        prompt: {
          maxTokens: 100,
        },
        apiKey,
      },
    );

    return response.choices[0].text;
  } catch (error) {
    console.error(error);
    return '';
  }
};

const renderChatGPT = () => {
  const input = document.getElementById('chatGPT-input');
  const output = document.getElementById('chatGPT-output');

  const handleSubmit = (event) => {
    event.preventDefault();

    const prompt = input.value;
    const response = chatGPT(prompt);

    output.innerHTML = response;
  };

  input.addEventListener('submit', handleSubmit);
};

renderChatGPT();
