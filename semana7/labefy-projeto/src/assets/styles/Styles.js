import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`

export const ToggleSection = styled.button`
  margin: 10px 0;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 265px;
  padding: 24px;
`

export const FormTitle = styled.h1`
  margin: 0 0 5rem 0;
`

export const FormData = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

export const CreatePlaylistButton = styled.button`
  padding: 0.5em 1em;
  border: none;
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 800;
  outline: none;
  cursor: pointer;
  :hover {
    background-color: #00d95a;
  }
  :active {
    outline-color: black;
    outline-style: solid;
    outline-width: 1px;
    outline-offset: 1px;
  }
`

export const PlaylistsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  min-width: 320px;
  h2 {
    margin: 0.5em 0 0 0;
  }
`

export const SearchContainer = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  gap: 5em;
  
`

export const PlaylistsItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #00d95a;
  padding: 20px;
  cursor: pointer;
  
  
`

export const DeleteButton = styled.span`
  margin-left: 1.5em;
  color: red;
  font-weight: 600;
  cursor: pointer;
`

export const TracksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2em;
  padding: 16px;
  min-width: 320px;
  h3 {
    margin: 0;
  }
`

export const TracksList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5em;
  div {
    padding-bottom: 1em;
    border-bottom: 2px dashed ;
  }
  p {
    margin-bottom: 1em;
  }
`

export const ToggleAddTrackSection = styled.button`
  margin-bottom: 0.6em;
`

export const NewTrackForm = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 0.8em;
  justify-items: center;
  border-top: 8px solid #00d95a;
  background-color: #00d95a;
  padding: 0.5em 1em;
  label {
    grid-column: 1 / span 1;
  }
  input {
    grid-column: 2 / span 2;
  }
`

export const AddTrackButton = styled.button`
  grid-column: 2 / span 1;
`