import "./style.css"
export const About = () => {
    return (  
        <div className="container mt-14  mx-auto">
            <div className="flex rounded-lg  items-center gap-4 mb-12" style={{boxShadow:"0 6px 10px 0 ",height:"74px"}}>
<h1 className="text-3xl ml-6">Home</h1>
<span className="text-3xl">{">"}</span>
<h1 className="font-bold text-3xl" style={{color:"var(--text)"}}>About</h1>
            </div>

            <div className="flex mb-44">
                <div>
                <img src="../../public/Photo/About/undraw_Team_page_re_cffb 1.png" alt="" />
                </div>
                <div className="ml-10">
                    <h1 className="title-about mb-28">OUR TEAM</h1>
                    <p style={{width:"590px"}} className="leading-10 text-2xl tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac ornare nisl, a ornare ipsum. Vivamus venenatis sodales sapien, ut condimentum ante ultricies et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc cursus pellentesque arcu sit amet placerat. Cras ut erat aliquet, suscipit tellus vitae, tempus magna. </p>
                </div>
            </div>
        </div>
    );
}
 
