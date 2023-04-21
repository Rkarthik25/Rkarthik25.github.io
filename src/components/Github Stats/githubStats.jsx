import React from 'react'
import "./githubStats.css"
// import { SimpleGrid, Box } from '@chakra-ui/react'

const GithubStats= () => {
  return (
  <>
 <div class="skills">Github Statistics</div>
    <div class="mystats">
        <div>
            <img src="https://github-readme-stats.vercel.app/api?username=Rkarthik25&theme=tokyonight&hide_border=false&include_all_commits=false&count_private=true" alt="Rkarthik25"/>
        </div>
        <div>
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=Rkarthik25&theme=tokyonight&hide_border=false" alt="Rkarthik25"/>
        </div>
        <div>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Rkarthik25&theme=tokyonight&hide_border=false&include_all_commits=false&count_private=true&layout=compact" alt="Rkarthik25"/>
        </div>
    </div>
    </>
  )
}

export default GithubStats