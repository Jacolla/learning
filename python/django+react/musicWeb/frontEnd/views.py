from django.shortcuts import render

# Create your views here.
def index(request, *args, **kwargs):
    return render(request, "front/index.html")




# vid min  --  20:40  --  #3 