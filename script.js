const Tools = {
    "AI for Image Generation": [
        ["DALL·E 2", "https://openai.com/dall-e", "AI that generates images from text descriptions. Offers a free tier with limited credits."],
        ["DALL·E 2 (paid)", "https://openai.com/dall-e", "Full access to OpenAI’s DALL·E 2 with more credits and higher-resolution images."],
        ["Craiyon", "https://www.craiyon.com", "A free, open-source version of DALL·E 2. Generates images from text prompts."],
        ["DeepAI Text to Image","https://deepai.org/machine-learning-model/text2img","Text-to-image generator that allows users to create unique images using AI. "],
        ["Artbreeder","https://www.artbreeder.com","Allows users to create and remix images through AI blending, mainly focused on portraits and landscapes."],
        ["NightCafe","https://creator.nightcafe.studio","Create AI-generated artwork using various neural networks and art styles. Offers free daily credits."],
        ["Runway ML","https://runwayml.com","AI-powered creative tools for image generation and editing. Offers free trials."],
        ["Pixray","https://pixray.github.io/","Text-to-image generator offering different styles and customization options."],
        ["Dream by Wombo","https://dream.ai/create","An easy-to-use AI that generates digital artwork from text prompts, offering free and subscription-based options."],
        ["This Person Does Not Exist","https://thispersondoesnotexist.com","AI that generates lifelike human faces, based on GAN (Generative Adversarial Network."],
        ["PaintsChainer","https://paintschainer.preferred.tech/index_en.html","AI-powered coloring tool for sketches. The free version offers basic features."],
        ["StarryAI"," https://www.starryai.com","Text-to-image generator with various artistic styles. Offers a free version with limited credits."],
        ["Deep Dream Generator"," https://deepdreamgenerator.com","Generates surreal, dream-like images from your photos and text prompts. "],
        ["AI Picasso","https://www.ai-picasso.com","Free tool that generates Picasso-style artworks from your text descriptions."],
        ["Fotor AI Art Generator","https://www.fotor.com/features/ai-image-generator/","Create AI-generated images from text prompts. Limited free access with premium upgrades."],
        ["Zyro AI Image Generator"," https://zyro.com/tools/ai-image-generator","Create unique images using AI based on your description. Free to use with limited features."],
        ["BigSleep","https://big-sleep.github.io/","Generates images based on text prompts using Python and deep learning models, fully open-source."],
        ["DreamStudio","https://beta.dreamstudio.ai","A text-to-image tool powered by Stable Diffusion. Offers a free credit system."],
        ["Artflow","https://www.artflow.ai","AI art generator for turning prompts into creative artworks. Offers a free tier with limited access."],
        ["AI Gahaku"," https://ai-art.tokyo/en/","Generates a portrait artwork based on your photo and applies various artistic styles. Free to use."],
        ["Runway’s Stable Diffusion","https://runwayml.com/stable-diffusion","Use Stable Diffusion’s text-to-image model. Free to try with limitations."],
    ],
    "AI for Content Creation": [
        [],
    ]
}

let Details = '';
for (let category in Tools) {
    let type = Tools[category]
    Details += `
    <details>
        <summary>
            <h2>${category}</h2>
        </summary>
        <table>
            <thead>
                <th>Tool Name</th>
                <th>Website/ Link</th>
                <th>Description</th>
            </thead>
            <tbody>`;
    for (let tools_details of type) {
        Details += `
                <tr>
                    <td>${tools_details[0]}</td>
                    <td><a href="${tools_details[1]}">${tools_details[0]}</a></td>
                    <td>${tools_details[2]}</td>
                </tr>
                `
    }
    Details += `</tbody></table></details>`
}

document.body.innerHTML = Details