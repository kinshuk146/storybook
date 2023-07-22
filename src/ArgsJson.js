const ArgsJson={
    variant:'contained',
    children:'Button',
    onClick:()=>{console.log(process.env.STORYBOOK_THEME)}
}

const JsonObject=JSON.stringify(ArgsJson)
const args=JSON.parse(JsonObject)

export default args

