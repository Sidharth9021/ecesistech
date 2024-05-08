import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "EcesisTech"}
                </title>
            </Head>
        </>
    )
}

export default PageHead