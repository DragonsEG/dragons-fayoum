type TypeofTeams = {
    herfFacebook?: string,
    herfLinkedIn?: string,
    herfGithub?: string,
    name: string,
    work?: string,
    image: string,
    Pos: string,
    isMaintainer?: boolean

}


const teamData: TypeofTeams [] = [{
    herfFacebook: 'https://www.facebook.com/hamdysaad266/'
    , herfLinkedIn: 'https://www.linkedin.com/in/hamdysaad/'
    , herfGithub: 'https://github.com/Hamdysaad20'
    , name: 'Hamdy Saad'
    , work: 'Sr.Frontend Engineer'
    , image: "/images/Founders/WEBP/HamdySaadFormal.webp"
    , Pos: 'CTO'
    , isMaintainer: true
},
    {
        herfFacebook: 'https://www.facebook.com/profile.php?id=100010052953257'
        , herfLinkedIn: 'https://www.linkedin.com/in/hatem-ali-hassan-042798225/'
        , herfGithub: 'https://github.com/Hatem2002'
        , name: 'Hatem Ali'
        , work: 'Frontend Engineer'
        , image: '/images/Founders/WEBP/HatemAliFormal.webp'
        , Pos: 'CEO'
        , isMaintainer: false
    }, {
        herfFacebook: 'https://www.facebook.com/profile.php?id=100012624398938'
        , herfLinkedIn: 'https://www.linkedin.com/in/salaheldin-mohamed/'
        , herfGithub: 'https://github.com/salah-mo'
        , name: 'Salah Mohamed'
        , work: 'Backend Engineer'
        , image: '/images/Founders/WEBP/Salah.webp'
        , Pos: 'Head Java'
        , isMaintainer: false
    }
   

]
export default teamData