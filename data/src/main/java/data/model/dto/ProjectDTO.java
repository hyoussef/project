package data.model.dto;


import java.util.Date;



public class ProjectDTO{
	
	private long id;
	private String name;
	private String description;
	private CompanyDTO company;
	private Date startDate;
	private Date endDate; 
	
	
	public ProjectDTO (){		
	 super();
	}


	
    public long getId() {
		return id;
	}


	
    public void setId(long id) {
		this.id = id;
	}


	
    public String getName() {
		return name;
	}


	
    public void setName(String name) {
		this.name = name;
	}


	
    public String getDescription() {
		return description;
	}


	
    public void setDescription(String description) {
		this.description = description;
	}


	
    public CompanyDTO getCompany() {
		return company;
	}


	
    public void setCompany(CompanyDTO company) {
		this.company = company;
	}


	
    public Date getStartDate() {
		return startDate;
	}


	
    public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}


	
    public Date getEndDate() {
		return endDate;
	}


	
    public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}


	
	
}
