function solve() {
    let index = 0;
    let response = "Something went wrong and we could not show you your result. Please try again";

    let
        answers =
            Array.from(document.querySelectorAll(".quiz-answer"))
                .map(x => x.addEventListener("click", function nextQuestion(e) {

                    if (e.target.id === "a") {
                        response = "You are kind and understanding to the customers and you respect the quality of the service the restaurant has pledged to offer. Clients will likely be forgiving and understanding in return. You are also aware of your own limitations, which is a healthy approach. However, this is probably the most ineffective response. You should consider taking some responsibility for the situation and you should not underestimate yourself. Above all, you should remember that allowing a problem or an issue to directly affect a customer is always the worst possible solution in any business, including restaurants. You should first consult this decision with the other three waitresses.";
                    } else if (e.target.id === "b") {
                        response = "It is encouraging that you are trying to cope with the situation yourself. Stressful situations are part of the work in the hospitality sector and you should get used to them. However, you should know your strengths and weaknesses and be careful not to take on tasks that you could not accomplish. Make this decision only if you feel confident that the clients will not need to wait forever for their offer, and that you can handle the service fast enough without compromising other aspects of quality - hygiene, communication, attention paid to individual customers, etc."
                    } else if (e.target.id === "c") {
                        response = "Surely, the owner is the most authoritative person to solve the problem. As a mere trainee, you should not make important decisions yourself. However, if Rose turns up a few minutes later she may not be happy that you have called the owner. Be careful, she will be your supervisor until the end of your internship. Besides, the owner is rarely the first person to turn to when you need to solve a routine problem such as this one. Although you should never make decisions you are not authorized to make yourself, you should first try to address them to middle management or colleagues before you approach the higher-level management. That is how the lines of authority work in most companies. You should call the owner only if the other employees do not pay attention to your problem."
                    } else if (e.target.id === "d") {
                        response = "Indeed, this is probably the best option in this situation. Conflicts with colleagues or clients are common in the hospitality sector, so it is vital to learn how to resolve them. Your practical request for help from your colleagues shows that you can handle conflict situations calmly and search for a viable compromise. You do not overestimate your skills, but you do not underestimate them either. What you ask from your colleagues is perfectly manageable and fair. Your approach also shows that you are mindful to collect enough information before making your final decision. You obviously respect the lines of authority in the company. The only thing you may want to watch out for this situation is whether or not you can really handle 4 tables all by yourself. There is no shame in asking for more help if needed."
                    }
                    let currentSection = document.querySelectorAll("section") [index]
                    currentSection.style.display = "none"
                    currentSection.classList.add("hidden")


                    let nextSection = document.querySelectorAll("section") [index + 1]
                    if (nextSection) {
                        nextSection.classList.remove("hidden")
                        nextSection.style.display = "block"
                        index++
                    } else {
                        console.log("Working")
                        showResult(response)
                    }
                }))

    function showResult(response) {
        console.log("Working")
        document.querySelector("#results").style.display = "block"
        document.querySelector("#results > h3").innerHTML = response
    }
}
