import React from "react";
import Innerservices from "./Innerservices";
import './Services.css';

const Services = () => {
    return (
        <>
            <div className="services-container"> 
                <h2 className="services-title">Our Services</h2>
                <p className="services-description">
                    Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit 
                    <br/>
                    laboriosam nisi commodi consequatur.
                </p>
            </div> 
            <div className="services-inner">
                <Innerservices 
                    heading={"Awesome Support"} 
                    url={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAsVBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Q9rufAAAAOnRSTlMAiJ36eQFEw9J4BwQ6/VYfHNbuDL8sYBbg3YttUIRLx7eGmRJdurHr9nXy50dzkX3RzKGWqTG1QaciGzQTEwAAAltJREFUWMPtl812okAQRisQokHAiKhgRE2M6mg0mn/v+z/YLJxDBGjoDJssUkuK757uququahGV3Tzs5pFvmn403z3cyPfMGmz3pGy/HXxDfzRMcmbeHzXl3WEi9zuHQ8dPEBddHb0TAkAzvpqdvswe4yYAhE61fmsCmEYv/fnttCvztip6OwA+C6LefgVgaJUC7gE2j8XO8QbgpUwfA0yUCRtMAJ7Ueg/g3VZv0J4CjJTpXwNzu2yJ9hzw2wrvO9CZlQe52wGm6g2selVp7pmqTVgd4Lq6UJ6ApqVYQGRXA+xQsYQAeNCp9T4QFBQasLF1APYG3HypboE7veM6BPJnYgq86QEcYJHLwRqWluZ95cPaKgjBu+6NNQWyQXgEhrqAIXBVkJsLr++0qsQtp+8NCzJ+CwBE43L9OASAXBquAQDcflURnexPxnOZeFZttb69Sn47PzWDFIBYDbgjBThdXbbRSAMCNSBIAwLDFrEWZAB7NaCZBjRYWOKRBTS/AcCToB4gkGU9wFKoB+AX8Av4IYBVPcBK9vUAB3mqB7iUblgHEHZFjlHjrC8AEzVgkgFERxEReywiH1+uezXASAPGZ/NEK0pc6oHacijsC6fu6gIARllnMtQAGfkA7q60vbZeXCVAZrfPr3FmTpw5TuaR0Ytfnw29gVCkvXDBfc4NVGNNQG8JAGH2sTQq6M5F++0klWHlXxUaI+XoK2fGxblNKRwUc7ajxAyNEBgl+oPOAzBWyv07rZn4LRG43tWZffRaomefGser/A08B4CF/Z8AafUb62XglY7QfwEDyf4CHYtqHQAAAABJRU5ErkJggg=="}
                />
                <Innerservices 
                    heading={"Analytical Security"} 
                    url={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA2FBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8HlUfZAAAAR3RSTlMA+wWK7+uySmcCATSm91QNEkFFmv0sPP71tXsI0m3kvH8ZCiuWHtsWqqHMYdUhL094MQeeOOny4WooJcFexLiRyrBkc6OGjsiX5ukAAAOWSURBVFjDtZfXWupqEIYnBUQUTAANNRgEVPpSAQvFwlrv/d/RPgiYQArleXaOwoTvm3/6/CJxz/ms3Z6dy8lPrgPQy54IHyyAQgFY/DkB/v5YABaDQQkorN6O1b5SgI4pIvIyB6zkzRHwmyTANLVxX64KMM8e5s5GtwrQ66qeTJ25stTVXvjFUgfoBILnnirzkEvHoO9/egCFcHsvHhSA9sgJR7dSSQXA1vpRCpxRG6DQuQ0E5W40twCUZFYVEbmrRKTmTb4IQE+78dnS6ACg1Gv3ruCWeaSdxmtdAaDT8FIWyCS7hojIuflvJnmmcZ42uskMkPsVnMHSDdBAs8FyrlL7Mu9qCWd+gpSI9Ms992zqAemSChJoFoD+bB6UcCEEOijJbOXAdA8hKNIxDq+XUIK6/K8EueZl2TmdQL0EmJixTizF4JMAoN9HE4yquVh8wjSe4SeaQOL1J65FHHg+hWCDlyFoJxD84i90eAkjyEHtQHx+I635q9GEcjT+a43/o8PDb52V4Tek8uKZJvLds/RHJ1z/pVdnmmeNyDs0N+//ALDf9uAlD17vNODSO4yymML4LR4vD+AbEjqf3smyUimtGaLx8onu+zWnuP76DI7Ik8sQgz8v8iFhBo1cfz6VYDyIxm+5zQ3qcD07JnC7ZlCi8TKEV//gg7+bL4rHEI2Xv+Cff5Ui1c171mOIxkuV4lb3TEJrl0E9cyLxLfja7XBeOW0YJJC/fqd1txktf1Q8hgi8fGA5uxKugwxR+AGB/pndjmtWAc04C7XfzZvhbtHaTIwdBgjXL8aEaUBe9pe0iAyLAPkd/aOPgVswwf5hJMi0tvxavlzeBA3Ni7QyJELWtR943DPO+joFU2QV3gHVNtZZ/Ab5CZpIzqIdukEMYRq3SJ5/wacqhu3vx1vPKtaIdBPslsjKGy6BvWe6XaPb+CVMBiI1sCPXCFNBiVjKn1aQMd2/mNHHrIEedrlIGx9QNEWu9ZhDrlvi+D3Ef20Yv4i8j32zKXKM2XcBcWVCtSVybcPXnh1QXYC+7Yd+u31/8d0QeUlAfe8W1yhBZuaXdNdx72Yg2di/fqmPQPPJF928popUmsDzITuspMsFqO4E46IHyih96IUzAYrmS+srTYFE7uAlMu0sAPt17bDKqw2UnGPujenvBDAu34s45TGQ6B57czWaCmBVqxagNA05/unnMwCQyfdPvH4btbqu12ux2v8DnNnEzBZYiqwAAAAASUVORK5CYII="}
                />
                <Innerservices 
                    heading={"Data Privacy"} 
                    url={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAgVBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8KTOKkAAAAKnRSTlMAG2pxd/P5iIC/MMGrk/oMQFIrpd2sOEOM1rjSgxYlBev9xMJZi3uhrkV3p2FrAAABhklEQVR42u2Z2ZKCMBiFqeANmSiSEtso9v9/p31yDSFOJ3k0qK4lz2veVCqUKnpciUKpcxKaQJcKPUnDbFOQaWBpFUmMJ11CQXa1mwUdn8N6fdmQ1tAUkfEBPOK47w6Ko/owUSWAt9wKgPZGRN0KR9Hn8ObIxiOIA1CcYZVspkGXP5C/CTzB+XAxRLaWAP9hRCXSaUP7dIm7x5E8W1gDnyLkAK72OFN5StixRNSACIQZxZXBEjyQB6Bl/gX+ZcVzAL+CT7QWc5IfAmRMi57RQ+X7IOXA/E0olAS4hKciZWAeAp+AfU+A0Aa6L2gJiDfiZHoZ2EkgdoXsUwMgT2LwMG+2b98mhOwMQC/g9KNAwio4MiF8DZP7DJcCL68MyAPzxB5f8k3EI6ZwD5c/MD+vG5N2FD5BxvYo4U/qvYw1PLLoS2F6KeBMRGtzbFc+WNJ0iz0bXJ4XsUYwyHfR5Mxt7Odc3cG9jyfaA/TPkiNmXT08tvYt7rS+shbn/HsTS/1VImpfMW4rcBLhNphJXOfkb3ZzF6CZKq8rmD81ZZnMWedRo8TthV7U6uNRwCrdmXQGR6H9jSChwdQf90l3fya+xVYffu66klTvstfTlgLqq3fHJ2lZuEElTffZ3DGb7Og+meMfPbg16DsWJz8lZ7U0qlX48FQAAAAASUVORK5CYII="}
                />
               
            </div>
        </>
    );
};

export default Services;
