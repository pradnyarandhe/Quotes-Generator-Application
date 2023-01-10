function generate(){
      var qoutes={
            "- Gautam Buddha":'"Give,even if you only have a little. "',
            "- Nelson Mandela":'"The greatest glory in living lies not in never falling, but in rising every time we fall."',
            "- John Lennon":'"Life is what happens when you are busy making other plans. "',
            "- Gautam Buddha":'"Radiate boundless love towards the entire world."',
            "- William Hazlitt":'"The art of life is to know how to enjoy a little and to endure very much."',
            "- William Osler":'"We are here to add what we can to life, not to get what we can from life."',
            "- Vincent Van Gogh":'"For the great doesn not happen through impulse alone, and is a succession of little things that are brought together."',  
            "- Vernon Howard":'"You have succeeded in life when all you really want is only what you really need."'


      }
      var authors = Object.keys(qoutes);
      
      var authors =authors[Math.floor(Math.random() *authors.length)];
            var qoute = qoutes[authors];
            
            document.getElementById("qoute").innerHTML= qoute;  
            document.getElementById("author").innerHTML= authors;      
      }

    
