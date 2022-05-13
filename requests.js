import { callAPI } from './callMsGraph.js'

export async function getUsers() {
    return await callAPI()
}

export async function getNotebooks({
    id,
    expandQuery = false,
    properties = "displayName,id"
}) {
    const expansionSelector = expandQuery && 
        `$select=${properties}&$expand=sections($select=${properties})`
    const response = await callAPI({ 
        url: `${id}/onenote/notebooks?${expansionSelector}` 
    })

    return response.value
}

export async function getPages({
    userId,
    sectionId,
    expandQuery = false,
    properties = "id,title"
}) {
    const selector = expandQuery && `$select=${properties}`
    const response = await callAPI({ 
        url: `${userId}/onenote/sections/${sectionId}/pages?${selector}`
    })

    return response.value
}

export async function getSections({
    userId,
    notebookId,
    expandQuery = false,
    properties = "displayName,id"    
}) {
    const selector = expandQuery && `$select=${properties}`
    const response = await callAPI({
        url: `${userId}/onenote/notebooks/${notebookId}/sections?${selector}`
    })

    return response.value
}

export async function createTemplate({
    userId,
    sectionId,
    requestBody = undefined
}) {
    const response = await callAPI({
        url: `${userId}/onenote/sections/${sectionId}/pages`,
        method: `post`,
        headers: { 'Content-Type': 'text/html' },
        data: requestBody
    })

    return response
}