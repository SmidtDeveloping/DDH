import { ICommand } from "wokcommands"

const actions = ['give', 'remove', 'has']


export default {
    category: 'Configuration',
    description: "test",

    permissions: ["MANAGE_ROLES"],

    minArgs: 3,
    expectedArgs: `<"${actions.join('", "')}"> <user @> <role @>`,
    slash: 'both',
    guildOnly: true,

    options: [
        {
            name: 'action',
            description: `de actie van een ${actions.join(', ')}`,
            type: 'STRING',
            required: true,
            choices: actions.map((action) => ({
                name: action,
                value: action
            })

            
            )},
            {
                name: "user",
                description: 'DE user waar de actie op moet gebeuren',
                type: 'USER',
                required: true
            },
            {
                name: "role",
                description: 'De role waar de actie op moet gebeuren',
                type: 'ROLE',
                required: true
            }
    ],

    callback: ({guild, args}) => {
const action = args.shift()
if (!action || !action.includes(action)) {
    return  `Verkeerde actie Gebruik ${actions.join(
        ', '
    )}`
}

const memberID = args.shift()!.replace(/[<@!&>]/g, '')
const roleID = args.shift()!.replace(/[<@!&>]/g, '')

const member = guild!.members.cache.get(memberID)
const role = guild!.roles.cache.get(memberID)

if(!role || !member) {
    return "Member of role niet gevonden"
}
if(action === 'has') {
    return member.roles.cache.has(roleID)
    ? `${member} heeft de role ${role}`
    : `${member} heeft de role ${role} niet`
}
if(action === 'give') {
member.roles.add(role)
return `De role ${role} is gegeven aan ${member}`
}

if(action === 'remove') {
    member.roles.remove(role)
    return `De role ${role} is weggehaald van ${member}`
    }

    return '??'
    }
} as ICommand