import {MongoClient, ServerApiVersion} from 'mongodb';

export default function JobsScraping({message}) {
    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export async function getServerSideProps() {
    const uri = "mongodb+srv://dragonsbootcamp:dragonsbootcamp@cluster0.1qz8rl6.mongodb.net/?retryWrites=true&w=majority";

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ping: 1});
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        return {
            props: {message: 'Scraping is running'},
        };
    } catch (error) {
        console.error(error);
        return {
            props: {message: 'Error running scraping'},
        };
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}