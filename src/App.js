import Layout from './components/layout'

import Hero from './content-components/hero'
import Section from './components/section'
import DefaultSectionItem from './content-components/defaultSectionItem'
import PublicationsSectionItem from './content-components/publicationsSectionItem'

import educationData from './_data/education.json'
import researchData from './_data/research.json'
import publicationsData from './_data/publications.json'

function Lister(SectionData) {
  console.log("SECTIONDATA: ", SectionData)
  const Content = SectionData.map( (data) => {
    return (
      <DefaultSectionItem 
        institution={data.institution}
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


function App() {
  return (
    <Layout>
      <Hero />

      <Section sectionTitle="EDUCATION">
        {/* {Education} */}
        {Lister(educationData)}
      </Section>

      <Section sectionTitle="PUBLICATIONS">
        {Publications}
      </Section>

      <Section sectionTitle="RESEARCH">
        {Lister(researchData)}
      </Section>

      <Section sectionTitle="WORK EXPERIENCE">
        {Lister(researchData)}
      </Section>

      <Section sectionTitle="HONORS">
        {Lister(researchData)}
      </Section>

      <Section sectionTitle="FUN FACTS">
        {Lister(researchData)}
      </Section>

    </Layout>
  );
}

export default App;
