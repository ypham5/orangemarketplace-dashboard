import React from 'react';
import { AiOutlineCloudUpload, AiOutlineCheckCircle} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import {
  EditorFeedBackStyles,
  FeedBackMessage,
  FeedBack,
  FeedBackOption
} from './styles'
import { Button } from "ui/buttons";


function EditorFeedBack ({children, status, writeCompleted, ...props})  {
    const navigator = useNavigate()
  return (
        <EditorFeedBackStyles  {...props}>
          { 
           !status
           ?
           <FeedBack>
             <AiOutlineCheckCircle color="11DABC" size="12rem"/>
             <FeedBackMessage>
               Product Uploaded Successfully
             </FeedBackMessage>
           </FeedBack>
            :
            <FeedBack>
             <AiOutlineCloudUpload color="11DABC" size="12rem"/>
             <FeedBackMessage>
               Uploading New Product
             </FeedBackMessage>
           </FeedBack>
          }
           <FeedBackOption>
             <Button
             bc="#F05523"
             color="#f8fafc"
             onClick={() => writeCompleted(false)}
             disabled={status}
             >Add Another Product</Button>
             <Button
             bc="#171717"
             color="#f8fafc"
              onClick={() => navigator('/dashboard')}
             >View All</Button>
           </FeedBackOption>

        </EditorFeedBackStyles>
  )
}

export default EditorFeedBack