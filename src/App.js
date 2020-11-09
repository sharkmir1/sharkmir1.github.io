import Layout from './components/layout'

import Hero from './content-components/hero'
import Section from './components/section'
import DefaultSectionItem from './content-components/defaultSectionItem'
import PublicationsSectionItem from './content-components/publicationsSectionItem'
import Footer from './components/footer'
import {formatLabel } from './util/textParse'

import educationData from './_data/education.json'
import researchData from './_data/research.json'
import publicationsData from './_data/publications.json'
import workData from './_data/work.json'
import honorsData from './_data/honors.json'

function Lister(SectionData) {
  // console.log("SECTIONDATA: ", SectionData)
  const Content = SectionData.map( (data) => {
    return (
      <DefaultSectionItem 
        institution={data.institution}
        role={data.role}
        timeline={data.timeline}
        desc1={data.desc1}
        desc2={data.desc2}
      />
    )
  })
  return Content
}

{/* <h5>{props.title}</h5>
<p>{props.authors}</p>
<p>{props.description}</p>
<p>{props.conference ? props.desc2 : null}</p>
<p>{props.paperLink}</p>
<p>{props.talkLink}</p>
<p>{props.projectLink}</p> */}
const Publications = publicationsData.map( (data) => {
  return (
    <PublicationsSectionItem
      imgSrc={data.imgSrc}
      title={data.title}
      authors={data.authors}
      description={data.description}
      conference={data.conference}
      paperLink={data.paperLink}
      talkLink={data.talkLink}
      projectLink={data.projectLink}
    />
  )
})

const parseJson = (jsondata) => {
  // jsondata is an array of dicts [{}, {}, ...]
  for (var i = 0; i < jsondata.length; i++) {
    Object.entries(jsondata[i]).map(([key, value]) => {
      if (typeof value === 'string') {
        console.log(key, ": ", jsondata[i][key])
        // jsondata[i][key] = formatLabel(jsondata[i][key].toString())
        console.log("update to: ", formatLabel(jsondata[i][key].toString()))
      }
    } )
  }
  //   Object.keys(jsondata[i]).map(function(keyName, keyIndex) {
  //     // console.log("key: ", keyName, "keyIndex: ", keyIndex)
  //     console.log("jsondata[keyName]: ", jsondata[i][keyName])
  //     jsondata[i][keyName] = formatLabel(jsondata[keyName])
  //   })
  // }
  // console.log(jsondata)
  
  
}


function App() {
  // parseJson(educationData)
  // let edu = 
  return (
    <div>
      <Layout>
        <Hero />

        <Section sectionTitle="EDUCATION">
          {Lister(educationData)}
        </Section>

        <Section sectionTitle="PUBLICATIONS">
          {Publications}
        </Section>

        <Section sectionTitle="RESEARCH">
          {Lister(researchData)}
        </Section>

        <Section sectionTitle="WORK EXPERIENCE">
          {Lister(workData)}
        </Section>

        <Section sectionTitle="HONORS">
          {Lister(honorsData)}
        </Section>

        {/* <Section sectionTitle="FUN FACTS">
          {Lister(researchData)}
        </Section> */}
      </Layout>

      <Footer />
    </div>
  );
}

export default App;
