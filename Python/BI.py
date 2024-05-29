import pandas as pd
data = [['Alex',10],['Bob',12],['Clarke',13]]
DataFrameTest = pd.DataFrame(data, columns = ['Name','Age'])

#Data Wrangling
#Data Exploration
import pandas as pd
data = {'Name':['Jai','Princi','Gaurav','Anuji','Ravi','Natasha','Riya'],
        'Age':[17,17,18,17,18,17,17],
        'Gender':['M','F','M','M','M','F','F'],
        'Marks':[90,76,'NaN',74,65,'NaN',71]
}
dataWrangle = pd.DataFrame(data)

#Dealing with missing values
import pandas as pd
dataset.fillna(value = dataset['Marks'].mean(), inplace = True)

#remove null row
dataset.dropna()

#Reshaping Data
import pandas as pd
dataset['Gender'] = dataset['Gender'].map({'M':0,'F':1}).astype(float)

#filtering
import pandas as pd
dataset = [dataset['Marks']>=75]

#removing column
#axis = 0 row
import pandas as pd
dataset = dataset.drop(['Age', 'Gender'],axis = 1)

#Web Scraping
import requests 
url = 'https://oxylabs.io/blog'
response = requests.get(url)
print(response.text)

#visualization using pandas
import pandas as pd
import matplotlib.pyplot as plt 
df = dataset.groupby('University')['Name'].count()
df.plot(kind='bar',figsize=(12,12), rot=0, color=['grey','red','blue','purple'], fontsize=20)
plt.ylabel('No of Emplyoee')
plt.show()

#Cluster column Chart
import pandas as pd
import matplotlib.pyplot as plt 
df = dataset.groupby(['University', 'Department'])['Name'].count()
df = df.unstack()
df.plot(kind='bar',figsize=(12,12), rot=0, color=['grey','red','blue','purple'], fontsize=20)
plt.show()

#line Chart
import pandas as pd
import matplotlib.pyplot as plt 
dataset.set_index('University', inplace = True)
dataset.plot(kind = 'line',figsize=(12,12), rot=0, color=['grey','red','blue','purple'], fontsize=20)
plt.show()

