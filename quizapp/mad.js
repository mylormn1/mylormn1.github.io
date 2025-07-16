const correct = ['A','A','B','A']; 
const form = document.querySelector('.quiz-form');
const showresult = document.querySelector('.result')

form.addEventListener('submit',e => {
    e.preventDefault();
    let score=0;
    
    const useranswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value]
    useranswers.forEach((answer,index)=>{
        if(answer===correct[index])
            {
                score += 25
            }

    });
    scrollTo(0,0)
    showresult.classList.remove('d-none')
    let i = 0 ;

    const timer=setInterval(() => {
        showresult.querySelector('span').textContent= `${i}%` ; 

        if(i === score)
        {
               clearInterval(timer); 
        }
        else{
            i++; 
        }
        

    }, 10);
    
    
});
