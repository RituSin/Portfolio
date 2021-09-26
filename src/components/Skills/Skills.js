import'./Skills.css';

const Skills = () => 
{
    
    const skill = 'text';
    const skills = [
        {id:'js',skill:'JavaScript',val: '75%'}, 
        {id:'react',skill:'React JS',val: '80%'}, 
        {id:'ng',skill:'Angular',val: '70%'}, 
        {id:'html',skill:'HTML5',val: '85%'}, 
        {id:'css',skill:'CSS3',val: '85%'}, 
        {id:'boot',skill:'Bootstrap',val: '60%'}, 
        {id:'c',skill:'C#',val: '75%'}, 
        {id:'net',skill:'.NetCore',val: '70%'}, 
        {id:'py',skill:'Python',val: '80%'}, 
        {id:'sql',skill:'SQL Server',val: '70%'}, 
        {id:'db',skill:'MongoDB',val: '70%'}, 
        {id:'git',skill: 'Git', val: '70%'}
    ]
    return(
        <div className="container">
            <h1 className="title">Skills</h1>
            <div className="overlay skills_page">
                


                <div className="skillSection">

                    {
                        skills.map((item,index) => (
                            <div className="box" key={item.skill+ index} >
                                <div className="shadow"></div>
                                <svg>
                                    <circle cx="80" cy="80" r="60" id={item.id} className="color1"></circle>
                                </svg>
                                <div className="counter">
                                    <span  className="color1">{item.val}</span>
                                </div>
                                <h2>{item.skill}</h2>
                            </div>
                        ))
                    }
                </div>

                
                <div className="Mobileskill_section">
                {
                    skills.map((item,index) => 
                        (
                            <div className="skills" key={item.skill+"_"+item.val}>
                                {console.log(item.val,item.skill)}
                                <span className="skillname">{item.skill}</span>
                                <div className="percent">
                                    <div className="progress" style={{width:item.val}}></div>
                                </div>
                                <span className="value">{item.val}</span>
                            </div>
                        ))
                }
                </div>
            </div>
        </div>
    )
}

export default Skills;