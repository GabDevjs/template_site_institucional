import { BlogPageTemplate } from "@/components/template/BlogPageTemplate"
import { Layout } from "@/layout"

function Blog(){
    return (
        <Layout
            titlePages="Blog"
            descriptionPages="Essa pagina se refece a logica de blog."
        >
            <BlogPageTemplate/>
        </Layout>
    )
}

export default Blog