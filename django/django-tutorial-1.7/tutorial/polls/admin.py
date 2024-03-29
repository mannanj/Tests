from django.contrib import admin
from polls.models import Choice, Question

class ChoiceInLine(admin.TabularInline):
	model = Choice
	extra = 3

class QuestionAdmin(admin.ModelAdmin):
	list_display = ('question_text','pub_date','was_published_recently')

	fieldsets = [
		(None,					{'fields' : ['question_text']}),
		('Date Information', 	{'fields' : ['pub_date'], 'classes' : ['collapse']}),
	]
	inlines = [ChoiceInLine]
	# Additional features
	list_filter = ['pub_date']
	search_fields = ['question_text']


admin.site.register(Question, QuestionAdmin)
