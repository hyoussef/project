package data.model.dto;

import data.model.def.IVille;



public class VilleDTO implements IVille  {
	
	private long id;
	private String name;
	
    /* (non-Javadoc)
	 * @see data.model.dto.IVille#getId()
	 */
    @Override
	public long getId() {
		return id;
	}
	
    /* (non-Javadoc)
	 * @see data.model.dto.IVille#setId(long)
	 */
    @Override
	public void setId(long id) {
		this.id = id;
	}
	
    /* (non-Javadoc)
	 * @see data.model.dto.IVille#getName()
	 */
    @Override
	public String getName() {
		return name;
	}
	
    /* (non-Javadoc)
	 * @see data.model.dto.IVille#setName(java.lang.String)
	 */
    @Override
	public void setName(String name) {
		this.name = name;
	}

}
